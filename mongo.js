const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://moralesandres:${password}@cluster0.r3v6vok.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy',
  important: true,
})

// note.save().then(result => {
//     console.log('note saved!')
//   })

const note2 = new Note({
    content: 'CSS is easy',
    important: true,
  })

// note2.save().then(result => {
//     console.log('note2 saved!')
// })

const note3 = new Note({
    content: 'Mongoose makes things easy',
    important: true,
  })

// note3.save().then(result => {
//     console.log('note3 saved!')
// })

Note.find({ important: true }).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })