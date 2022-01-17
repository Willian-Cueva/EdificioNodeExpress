const { Schema, model } = require("mongoose");
const Persona = model('Persona');

const CuentaSchema = new Schema(
  {
    numero: {
      type: String,
      minlength: 20,
      maxlength: 20,
      required: true,
      unique: true
    },
    saldo: {
      type: Number,
      required: true,
      default: 0.01
    },
    activa: {
      type: Boolean,
      required: true,
    },
    persona: {
        type: Schema.ObjectId,ref: Persona
    }

  },
  { timestamps: true }
);

module.exports =  model('Cuenta', CuentaSchema);