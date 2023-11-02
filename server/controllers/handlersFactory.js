import asyncHandler from "express-async-handler";

const createOne = (Model) => {
  return asyncHandler(async (req, res) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({ data: newDoc });
  });
};

const updateOne = (Model, name = "document") => {
  return asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const document = await Model.findByIdAndUpdate(id, req.body, { new: true });

    if (!document) {
      res.status(404);
      return next(new Error(`No ${name} for this id ${id}`));
    }

    document.save();
    res.status(200).json({ data: document });
  });
};

const deleteOne = (Model, name = "document") => {
  return asyncHandler(async (req, res, next) => {
    const document = await Model.findByIdAndDelete(req.params.id);

    if (!document) {
      return next(new Error(`No ${name} for this id ${req.params.id}`));
    }

    document.remove();
    res.status(204).send();
  });
};

const getOne = (Model, name = "document") => {
  return asyncHandler(async (req, res, next) => {
    const document = await Model.findById(req.params.id);

    if (!document) {
      return next(new Error(`No ${name} for this id ${req.params.id}`));
    }

    res.status(200).json({ data: document });
  });
};

const getAll = (Model) => {
  return asyncHandler(async (req, res, next) => {
    const document = await Model.find();

    res.status(200).json({ size: document.length, data: document });
  });
};

export { createOne, updateOne, getOne, getAll, deleteOne };
