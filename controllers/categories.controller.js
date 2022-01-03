import Categories from '../models/categories.model.js'

const getAllCategories = async (req, res) => {
  const categories = await Categories.find()

  res.json(categories)
}

const getCategories = async (req, res) => {
  const categoriesId = req.params.categoriesId
  const foundCategories = await Categories.findById(categoriesId)
  res.json(foundCategories)
}

const postCategories = async (req, res) => {
  const categories = new Categories({
    categories_name: req.body.categories_name,
  })

  try {
    const result = await categories.save()
    res.json({
      message: 'You inserted the categories sucessfully with the id:' + result._id,
      data: result,
    })
  } catch (error) {
    res.json(error)
  }
}

const putCategories = async (req, res) => {
  const categoriesId = req.params.categoriesId
  const categories = req.body // sind alle Eigenschaften hinter

  // dritter Paramter (.., .., {return }) damit bei Postman PUT nicht der letzte Stand sondern, das Update angezeigt wird!!
  const result = await Categories.findByIdAndUpdate(categoriesId, categories, {
    returnDocument: 'after',
  }) // {new: true} deprecated
  res.json(result)
}

const deleteCategories = async (req, res) => {
  const categoriesId = req.params.categoriesId

  try {
    const result = await Categories.findOneAndDelete(categoriesId)
    if (result) {
      res.json({
        success: true,
        message: 'Successfully deleted categories.',
      })
    } else {
      res.json({
        success: false,
        message: 'Could not delete categories from database.',
      })
    }
  } catch (error) {
    res.json({ status: 'Something else happened.' })
  }
}

export { getAllCategories, getCategories, postCategories, putCategories, deleteCategories }