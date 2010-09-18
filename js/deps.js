// This file was autogenerated by calcdeps.py
goog.addDependency("../../../../js/box2d/collision/b2AABB.js", ['b2AABB'], ['b2Vec2']);
goog.addDependency("../../../../js/box2d/collision/b2Bound.js", ['b2Bound'], []);
goog.addDependency("../../../../js/box2d/collision/b2BoundValues.js", ['b2BoundValues'], []);
goog.addDependency("../../../../js/box2d/collision/b2BroadPhase.js", ['b2BroadPhase'], ['b2PairManager', 'b2Vec2', 'b2Bound', 'b2Settings', 'b2Proxy', 'b2BoundValues']);
goog.addDependency("../../../../js/box2d/collision/b2BufferedPair.js", ['b2BufferedPair'], []);
goog.addDependency("../../../../js/box2d/collision/b2Collision.js", ['b2Collision'], ['ClipVertex']);
goog.addDependency("../../../../js/box2d/collision/b2ContactID.js", ['b2ContactID'], ['Features']);
goog.addDependency("../../../../js/box2d/collision/b2ContactPoint.js", ['b2ContactPoint'], ['b2Vec2', 'b2ContactID']);
goog.addDependency("../../../../js/box2d/collision/b2Distance.js", ['b2Distance'], ['b2Math']);
goog.addDependency("../../../../js/box2d/collision/b2Manifold.js", ['b2Manifold'], ['b2Settings', 'b2Vec2', 'b2ContactPoint']);
goog.addDependency("../../../../js/box2d/collision/b2OBB.js", ['b2OBB'], ['b2Vec2', 'b2Mat22']);
goog.addDependency("../../../../js/box2d/collision/b2Pair.js", ['b2Pair'], ['b2Settings']);
goog.addDependency("../../../../js/box2d/collision/b2PairCallback.js", ['b2PairCallback'], []);
goog.addDependency("../../../../js/box2d/collision/b2PairManager.js", ['b2PairManager'], ['b2Pair', 'b2BufferedPair']);
goog.addDependency("../../../../js/box2d/collision/b2Proxy.js", ['b2Proxy'], ['b2Settings']);
goog.addDependency("../../../../js/box2d/collision/ClipVertex.js", ['ClipVertex'], ['b2Vec2', 'b2ContactID']);
goog.addDependency("../../../../js/box2d/collision/Features.js", ['Features'], []);
goog.addDependency("../../../../js/box2d/collision/shapes/b2BoxDef.js", ['b2BoxDef'], ['b2ShapeDef', 'b2Vec2']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2CircleDef.js", ['b2CircleDef'], ['b2Shape', 'b2Vec2', 'b2ShapeDef']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2CircleShape.js", ['b2CircleShape'], ['b2Mat22', 'b2Vec2', 'b2AABB', 'b2Shape']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2MassData.js", ['b2MassData'], ['b2Vec2']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2PolyDef.js", ['b2PolyDef'], ['b2ShapeDef', 'b2Shape', 'b2Vec2']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2PolyShape.js", ['b2PolyShape'], ['b2Mat22', 'b2Vec2', 'b2Settings', 'b2Shape', 'b2OBB']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2Shape.js", ['b2Shape'], ['b2Mat22', 'b2Vec2']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2ShapeDef.js", ['b2ShapeDef'], ['b2Vec2']);
goog.addDependency("../../../../js/box2d/collision/shapes/b2ShapeFactory.js", ['b2ShapeFactory'], ['b2CircleShape', 'b2PolyShape', 'b2Shape']);
goog.addDependency("../../../../js/box2d/common/b2Settings.js", ['b2Settings'], []);
goog.addDependency("../../../../js/box2d/common/math/b2Mat22.js", ['b2Mat22'], []);
goog.addDependency("../../../../js/box2d/common/math/b2Math.js", ['b2Math'], []);
goog.addDependency("../../../../js/box2d/common/math/b2Vec2.js", ['b2Vec2'], ['b2Math']);
goog.addDependency("../../../../js/box2d/dynamics/b2Body.js", ['b2Body'], ['b2Mat22', 'b2Vec2', 'b2Math', 'b2MassData', 'b2ShapeFactory']);
goog.addDependency("../../../../js/box2d/dynamics/b2BodyDef.js", ['b2BodyDef'], ['b2Settings']);
goog.addDependency("../../../../js/box2d/dynamics/b2CollisionFilter.js", ['b2CollisionFilter'], []);
goog.addDependency("../../../../js/box2d/dynamics/b2ContactManager.js", ['b2ContactManager'], ['b2Contact', 'b2PairCallback', 'b2NullContact', 'b2ContactFactory']);
goog.addDependency("../../../../js/box2d/dynamics/b2Island.js", ['b2Island'], ['b2ContactSolver']);
goog.addDependency("../../../../js/box2d/dynamics/b2TimeStep.js", ['b2TimeStep'], []);
goog.addDependency("../../../../js/box2d/dynamics/b2World.js", ['b2World'], ['b2TimeStep', 'b2ContactManager', 'b2CollisionFilter', 'b2BroadPhase', 'b2Body', 'b2Island', 'b2JointFactory', 'b2WorldListener']);
goog.addDependency("../../../../js/box2d/dynamics/b2WorldListener.js", ['b2WorldListener'], []);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2CircleContact.js", ['b2CircleContact'], ['b2Contact', 'b2Manifold', 'b2Collision']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2Conservative.js", ['b2Conservative'], []);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2Contact.js", ['b2Contact'], ['b2ContactNode', 'b2ContactRegister']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2ContactConstraint.js", ['b2ContactConstraint'], ['b2ContactConstraintPoint', 'b2Settings', 'b2Vec2']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2ContactConstraintPoint.js", ['b2ContactConstraintPoint'], ['b2Vec2']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2ContactFactory.js", ['b2ContactFactory'], ['b2CircleContact', 'b2PolyAndCircleContact', 'b2PolyContact']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2ContactNode.js", ['b2ContactNode'], []);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2ContactRegister.js", ['b2ContactRegister'], []);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2ContactSolver.js", ['b2ContactSolver'], ['b2Settings', 'b2ContactConstraint']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2NullContact.js", ['b2NullContact'], ['b2Contact', 'b2ContactNode']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2PolyAndCircleContact.js", ['b2PolyAndCircleContact'], ['b2Contact', 'b2ContactNode', 'b2Manifold']);
goog.addDependency("../../../../js/box2d/dynamics/contacts/b2PolyContact.js", ['b2PolyContact'], ['b2ContactNode', 'b2Math', 'b2Manifold']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2DistanceJoint.js", ['b2DistanceJoint'], ['b2Joint']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2DistanceJointDef.js", ['b2DistanceJointDef'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2GearJoint.js", ['b2GearJoint'], ['b2Joint']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2GearJointDef.js", ['b2GearJointDef'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2Jacobian.js", ['b2Jacobian'], ['b2Vec2']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2Joint.js", ['b2Joint'], ['b2JointNode']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2JointDef.js", ['b2JointDef'], ['b2Joint']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2JointFactory.js", ['b2JointFactory'], ['b2RevoluteJoint', 'b2PrismaticJoint', 'b2MouseJoint', 'b2DistanceJoint', 'b2PulleyJoint', 'b2GearJoint']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2JointNode.js", ['b2JointNode'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2MouseJoint.js", ['b2MouseJoint'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2MouseJointDef.js", ['b2MouseJointDef'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2PrismaticJoint.js", ['b2PrismaticJoint'], ['b2Joint', 'b2Vec2', 'b2Jacobian']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2PrismaticJointDef.js", ['b2PrismaticJointDef'], ['b2JointDef', 'b2Vec2']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2PulleyJoint.js", ['b2PulleyJoint'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2PulleyJointDef.js", ['b2PulleyJointDef'], []);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2RevoluteJoint.js", ['b2RevoluteJoint'], ['b2Joint']);
goog.addDependency("../../../../js/box2d/dynamics/joints/b2RevoluteJointDef.js", ['b2RevoluteJointDef'], ['b2Vec2', 'b2JointDef', 'b2Joint']);
goog.addDependency("../../../../js/demo/demo.js", ['Demo'], ['goog.events', 'goog.events.EventType', 'goog.math.Vec2', 'b2AABB', 'b2World', 'b2BodyDef', 'b2BoxDef', 'b2CircleDef', 'demoDraw', 'demos.stack', 'demos.pendulum', 'demos.top', 'demos.crank', 'demos.compound']);
goog.addDependency("../../../../js/demo/demoDraw.js", ['demoDraw'], []);
goog.addDependency("../../../../js/demo/demos/compound.js", ['demos.compound'], []);
goog.addDependency("../../../../js/demo/demos/crank.js", ['demos.crank'], ['b2PrismaticJointDef', 'b2BoxDef', 'b2BodyDef', 'b2RevoluteJointDef']);
goog.addDependency("../../../../js/demo/demos/pendulum.js", ['demos.pendulum'], ['b2RevoluteJointDef']);
goog.addDependency("../../../../js/demo/demos/stack.js", ['demos.stack'], []);
goog.addDependency("../../../../js/demo/demos/top.js", ['demos.top'], ['b2RevoluteJointDef', 'b2CircleDef', 'b2PolyDef', 'b2BodyDef']);
goog.addDependency("../../../../js/application.js", [], ['Demo']);
