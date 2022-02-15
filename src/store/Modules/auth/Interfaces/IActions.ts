import IPayload from "./IPayload";

export default interface IAction {
  type: string;
  payload: IPayload;
}