import { toast } from "react-toastify";

export const notifyInfo = (message: string) => {
  toast.info(message);
};

export const notifySuccess = (message: string) => {
  toast.success(message);
};

export const notifyError = (message: string) => {
  toast.error(message);
};
