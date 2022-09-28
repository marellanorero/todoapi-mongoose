const mongoose = require('mongoose');

try{
    //conexión a la base de datos
    mongoose.connect('mongodb://localhost:27017/test_mongo', (err) => {
        if(err) throw err;
        console.log('Database connection succesfully!!')
    })

    //1.Esquema
    
    const taskSchema = mongoose.Schema({
        task: {
            type: String,
            required: [true, 'Task is required']
        }
    })

    //2.Modelo
    const Task = mongoose.model('Task', taskSchema)

    //3. Crear un nuevo usuario o documento dentro de la coleccion
/*     const task = new Task({
        task: 'Estudiar',
    })

    task.save((err) => {
        if(err) throw err;
        console.log('Task Created')
    });
 */
    //Buscar 

/*     const task = Task.find({name: 'Estudiar'})

    console.log(task) */

    //Update 

/*     Task.updateOne({task: 'Estudiar'}).exec((err) => {
        if(err) throw err;
        console.log('Task updated')
    }) */

    //Delete 
    Task.deleteOne({ task: 'large' }).exec((err) => {
        if(err) throw err
        console.log('Task deleted')
    })

} catch(error){
    console.log(error.message)
} finally{
    //mongoose.disconnect();
}