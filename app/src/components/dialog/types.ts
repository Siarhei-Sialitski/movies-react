export interface IDialogProps {
  title: string | JSX.Element;
  children: JSX.Element;
  onClose: () => void;
}
