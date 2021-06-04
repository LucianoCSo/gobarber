import { ValidationError } from 'yup';

interface Errors {
  [chave: string]: string;
}
export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};
  err.inner.forEach((e) => {
    if (e.path != null) {
      validationErrors[e.path] = e.message;
    }
  });
  return validationErrors;
}
