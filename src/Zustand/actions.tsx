//actions.tsx
import { UPDATE_FIELD } from "./constants";

export const updateProfileField = (fieldName: string, value: string) => ({
  type: UPDATE_FIELD,
  payload: { fieldName, value },
});
