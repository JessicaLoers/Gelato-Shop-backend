import Gelato from '../models/gelato.model.js'

const getAllGelato = async (req, res) => {
  const gelato = await Gelato.find()

  res.json(gelato)
}

const getGelato = async (req, res) => {
  const gelatoId = req.params.gelatoId
  const foundGelato = await Gelato.findById(gelatoId)
  res.json(foundGelato)
}

const postGelato = async (req, res) => {
  const gelato = new Gelato({
    name: req.body.name,
    type: req.body.type,
    vegan: req.body.vegan,
    // name: req.body.name,
    // type: req.body.type,
    // vegan: req.body.vegan,
    // calories: req.body.calories,
    // specials: req.body.specials,
  })

  try {
    const result = await gelato.save()
    res.json({
      message: 'You inserted the gelato sucessfully with the id:' + result._id,
      data: result,
    })
  } catch (error) {
    res.json(error)
  }
}

const putGelato = async (req, res) => {
  const gelatoId = req.params.gelatoId
  const gelato = req.body // sind alle Eigenschaften hinter

  // dritter Paramter (.., .., {return }) damit bei Postman PUT nicht der letzte Stand sondern, das Update angezeigt wird!!
  const result = await Gelato.findByIdAndUpdate(gelatoId, gelato, {
    returnDocument: 'after',
  }) // {new: true} deprecated
  res.json(result)
}

const deleteGelato = async (req, res) => {
  const gelatoId = req.params.gelatoId

  try {
    const result = await Gelato.findOneAndDelete(gelatoId)
    if (result) {
      res.json({
        success: true,
        message: 'Successfully deleted Gelato.',
      })
    } else {
      res.json({
        success: false,
        message: 'Could not delete Gelato from database.',
      })
    }
  } catch (error) {
    res.json({ status: 'Something else happened.' })
  }
}

export { getAllGelato, getGelato, postGelato, putGelato, deleteGelato }