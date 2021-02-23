const database = require('../config/database');
const Project = require('../models/project');

const findAll = async (req, res, next) => {
  const data = await Project.find();
  if (!data) throw new Error(`Didn't find a projects`);
  req.data = data;
  next();
};

const find = async (req, res, next) => {
  const data = await Project.findOne({
    slug: req.params.slug,
  });
  if (!data) {
    const err = new Error(`Didn't find a project`);
    err.status = 404;
    next(err);
  }
  req.data = data;
  next();
};

const create = async (req, res) => {
  try {
    const project = await new Project({
      title: req.body.title,
      category: req.body.category,
      date: req.body.date,
      description: req.body.description,
    }).save();
    return res
      .status(201)
      .send({ data: project, message: 'New project was created' });
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res, next) => {
  try {
    let project = await Project.findOne({
      slug: req.params.slug,
    });
    //!project && next();
    
    project.category = req.body.category;
    project.title = req.body.title;
    project.date = req.body.date;
    project.description = req.body.description;

    await project.save();
    
    // let doc = await Project.findOneAndUpdate(
    //   {
    //     slug: req.params.slug,
    //   },
    //   {
    //     category: req.body.category,
    //     title: req.body.title,
    //     date: req.body.date,
    //     description: req.body.description,
    //   },
    //   {
    //     new: true,
    //   }
    // );

    return res
      .status(200)
      .send({ data: project, message: 'Project was updated' });
  } catch (error) {
    console.log(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const project = await Project.remove({
      slug: req.params.slug,
    });
    return res.status(200).send({ message: `Deleted ${project} project/s` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { findAll, find, create, update, remove };
// category: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Category',
// },
// title: {
//     type: String,
//     maxLength: 60,
// },
// date: Date,
// description: {
//     type: String,
//     maxLength: 1100,
// }

// const fetchCategory = data.map(
//   ({ slug, _id, category, title, date, description }) => {
//     return {
//       slug: slug,
//       _id: _id,
//       category: category,
//       title: title,
//       date: date,
//       description: description,
//     };
//   },
// );
