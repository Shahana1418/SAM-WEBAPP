const mongoose = require('mongoose');

/* ═══════════════════════════════════════════════════
   Student Schema
═══════════════════════════════════════════════════ */
const StudentSchema = new mongoose.Schema({
    rollNo:       { type: String, required: true, unique: true, uppercase: true, index: true },
    name:         { type: String, required: true },
    department:   { type: String, required: true, uppercase: true, index: true },
    batch:        { type: Number, required: true, index: true },
    gender:       { type: String, enum: ['M', 'F'], required: true },
    dob:          { type: String },  // DD-MM-YYYY format
    cgpa:         { type: Number, default: null },
    email:        { type: String },
    whatsapp:     { type: String },
    status:       { type: String, default: 'Active' }
}, { timestamps: true });

/* ═══════════════════════════════════════════════════
   Team Schema
═══════════════════════════════════════════════════ */
const TeamSchema = new mongoose.Schema({
    teamName:     { type: String, required: true },
    department:   { type: String, required: true, uppercase: true, index: true },
    batch:        { type: Number, required: true, index: true },
    cycleId:      { type: mongoose.Schema.Types.ObjectId, ref: 'Cycle' },
    members:      [{ type: String }],   // Array of rollNos
    createdBy:    { type: String },      // Role that created them
    locked:       { type: Boolean, default: false }
}, { timestamps: true });

/* ═══════════════════════════════════════════════════
   Academic Cycle Schema
═══════════════════════════════════════════════════ */
const CycleSchema = new mongoose.Schema({
    name:         { type: String, required: true },
    startDate:    { type: String, required: true },
    endDate:      { type: String, required: true },
    departments:  [{ type: String }],
    createdBy:    { type: String }
}, { timestamps: true });

/* ═══════════════════════════════════════════════════
   Session / Schedule Schema
═══════════════════════════════════════════════════ */
const SessionSchema = new mongoose.Schema({
    department:     { type: String, required: true, uppercase: true },
    batch:          { type: Number, required: true },
    cycleId:        { type: mongoose.Schema.Types.ObjectId, ref: 'Cycle' },
    sessionNumber:  { type: Number, required: true },
    presenterIdx:   { type: Number },
    reviewerIdx:    { type: Number },
    feedbackIdx:    { type: Number },
    revealed:       { type: Boolean, default: false },
    date:           { type: String }
}, { timestamps: true });

/* ═══════════════════════════════════════════════════
   Assignment Schema
═══════════════════════════════════════════════════ */
const AssignmentSchema = new mongoose.Schema({
    department:   { type: String, required: true, uppercase: true },
    batch:        { type: Number, required: true },
    courseName:   { type: String },
    regulation:   { type: String },
    units:        [{ type: String }],
    type:         { type: String, enum: ['team', 'individual'], default: 'team' },
    createdBy:    { type: String }
}, { timestamps: true });

/* ═══════════════════════════════════════════════════
   Grade / Mark Schema
═══════════════════════════════════════════════════ */
const GradeSchema = new mongoose.Schema({
    rollNo:       { type: String, required: true, index: true },
    department:   { type: String, required: true, uppercase: true },
    batch:        { type: Number, required: true },
    sessionId:    { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
    component:    { type: String },    // presentation, review, feedback, etc.
    marks:        { type: Number, default: 0 },
    maxMarks:     { type: Number, default: 10 },
    gradedBy:     { type: String }
}, { timestamps: true });

/* ═══════════════════════════════════════════════════
   SAC Coordinator Schema
═══════════════════════════════════════════════════ */
const SacSchema = new mongoose.Schema({
    rollNo:       { type: String, required: true },
    name:         { type: String, required: true },
    department:   { type: String, required: true, uppercase: true },
    batch:        { type: Number },
    gender:       { type: String },
    whatsapp:     { type: String },
    email:        { type: String }
}, { timestamps: true });

/* ═══════════════════════════════════════════════════
   Auth Log Schema (for tracking logins)
═══════════════════════════════════════════════════ */
const AuthLogSchema = new mongoose.Schema({
    role:         { type: String, required: true },
    rollNo:       { type: String },
    department:   { type: String },
    loginTime:    { type: Date, default: Date.now },
    ipAddress:    { type: String }
}, { timestamps: true });

module.exports = {
    Student:    mongoose.model('Student',    StudentSchema),
    Team:       mongoose.model('Team',       TeamSchema),
    Cycle:      mongoose.model('Cycle',      CycleSchema),
    Session:    mongoose.model('Session',    SessionSchema),
    Assignment: mongoose.model('Assignment', AssignmentSchema),
    Grade:      mongoose.model('Grade',      GradeSchema),
    Sac:        mongoose.model('Sac',        SacSchema),
    AuthLog:    mongoose.model('AuthLog',    AuthLogSchema)
};
