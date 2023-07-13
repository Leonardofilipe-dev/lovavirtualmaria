
import { Request, Response } from "express";

class categoriaController {
  async create(req: Request, res: Response) {
    try {
      res.send("Hello, World!");
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

const controllerInstance = new categoriaController();

export default controllerInstance;
