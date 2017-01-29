"use strict";
/*
*  Copyright (C) 1998-2017 by Northwoods Software Corporation. All Rights Reserved.
*/

// A custom LinkReshapingTool that shows only a single reshape handle on a Bezier curved Link.
// Dragging that handle changes the value of {@link Link#curviness}.

/**
* @constructor
* @extends LinkReshapingTool
* @class
* This CurvedLinkReshapingTool class allows for a Link's path to be modified by the user
* via the dragging of a single tool handle at the middle of the link. 
*/
function CurvedLinkReshapingTool() {
  go.LinkReshapingTool.call(this);
  /** @type {number} */
  this._originalCurviness = NaN;
}
go.Diagram.inherit(CurvedLinkReshapingTool, go.LinkReshapingTool);

/**
* @override
* @this {CurvedLinkReshapingTool}
* @param {Shape} pathshape
* @return {Adornment}
*/
CurvedLinkReshapingTool.prototype.makeAdornment = function(pathshape) {
  var link = pathshape.part;
  if (link !== null && link.curve === go.Link.Bezier && link.pointsCount === 4) {
    var adornment = new go.Adornment();
    adornment.type = go.Panel.Link;
    var h = this.makeHandle();
    this.setReshapingBehavior(h, go.LinkReshapingTool.All);
    h.cursor = 'move';
    adornment.add(h);
    adornment.category = this.name;
    adornment.adornedObject = pathshape;
    return adornment;
  } else {
    return go.LinkReshapingTool.prototype.makeAdornment.call(this, pathshape);
  }
};

/**
* @override
* @this {CurvedLinkReshapingTool}
*/
CurvedLinkReshapingTool.prototype.doActivate = function() {
  go.LinkReshapingTool.prototype.doActivate.call(this);
  this._originalCurviness = this.adornedLink.curviness;
};

/**
* @override
* @this {CurvedLinkReshapingTool}
*/
CurvedLinkReshapingTool.prototype.doCancel = function() {
  this.adornedLink.curviness = this._originalCurviness;
  go.LinkReshapingTool.prototype.doCancel.call(this);
};

/**
* @override
* @this {CurvedLinkReshapingTool}
* @param {Point} newpt
* @return {Point}
*/
CurvedLinkReshapingTool.prototype.reshape = function(newpt) {
  var link = this.adornedLink;
  if (link !== null && link.curve === go.Link.Bezier && link.pointsCount === 4) {
    var start = link.getPoint(0);
    var end = link.getPoint(3);
    var ang = start.directionPoint(end);
    var mid = new go.Point((start.x + end.x) / 2, (start.y + end.y) / 2);
    var a = new go.Point(9999, 0).rotate(ang + 90).add(mid);
    var b = new go.Point(9999, 0).rotate(ang - 90).add(mid);
    var q = newpt.copy().projectOntoLineSegmentPoint(a, b);
    var curviness = Math.sqrt(mid.distanceSquaredPoint(q));
    if (link.fromPort === link.toPort) {
      if (newpt.y < link.fromPort.getDocumentPoint(go.Spot.Center).y) curviness = -curviness;
    } else {
      var diff = mid.directionPoint(q) - ang;
      if ((diff > 0 && diff < 180) || (diff < -180)) curviness = -curviness;
    }
    link.curviness = curviness;
    return q;
  } else {
    go.LinkReshapingTool.prototype.reshape.call(this, newpt);
  }
}
