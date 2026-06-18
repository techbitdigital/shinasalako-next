// Simple form validation utilities

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

export type FieldErrors = Record<string, string>;

export function validateFields(
  fields: Record<string, { value: string; required?: boolean; email?: boolean; label: string }>
): FieldErrors {
  const errors: FieldErrors = {};
  for (const [key, field] of Object.entries(fields)) {
    if (field.required && !validateRequired(field.value)) {
      errors[key] = `${field.label} is required`;
    } else if (field.email && field.value && !validateEmail(field.value)) {
      errors[key] = `Please enter a valid email address`;
    }
  }
  return errors;
}
