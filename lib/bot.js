function Bot (config, io, log) {
	const _ = require('lodash')

	var kObj = config;

	function getChatState(kObj, state) {
		var currentStep = state.currentStep || -1
		var {nodeDataArray} = kObj
		var currentNode = _.find(nodeDataArray, {
			key: currentStep
		})

		return {
			display: {
				text: currentNode.text,
				options: getNodeOptions(kObj, currentNode),
			},
			currentStep: getNextStep(kObj, currentNode, state),
			variables: state.variables,
			requeriments: []
		}
	}

	function getNodeOptions(kObj, node) {
		if (node.figure !== 'Diamond') return null

		var options = _.filter(kObj.linkDataArray, {
			from: node.key
		})

		return options
	}
	function getNextStep(kObj, node, state) {
		if (node.figure !== 'Diamond') {
			return _.find(kObj.linkDataArray, {
				from: node.key
			}).to
		} else {
			var variableName = node.text.split('::')[1]
			var variableResult = _.get(state, ['variables', variableName])

			if (!variableResult) {
				return node.key
			}

			var variableResultNode = _.find(kObj.linkDataArray, {
				from: node.key,
				text: variableResult
			})

			if (!variableResultNode) {
				console.log('Branch not found', variableResult, variableName)
				return node.key
			}

			return variableResultNode.to
		}
	}

	function handleChat(state) {
		var newChatState = getChatState(kObj, state)
		var displayText = newChatState.display.text.split('::')[0]

		if (newChatState.display.options) {
			var variableName = newChatState.display.text.split('::')[1]

			var variableValue = _.get(state, ['variables', variableName])
			if (variableValue) {
				handleChat(newChatState)
				return
			}

			io(displayText, _.map(newChatState.display.options, 'text'), answer => {
			  var inputNewChatState = _.merge({}, newChatState, {
			  	variables: {
			  		[variableName]: answer.replace('\n', '')
			  	}
			  })

			  handleChat(inputNewChatState)
			  return
			})
		} else {
			log(displayText)
			handleChat(newChatState)
			return
		}
	}

	return handleChat
}

module.exports = Bot