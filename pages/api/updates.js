import updates from "./updates.json";

export default function handler(req, res) {
  res.status(200).json(updates);
}
