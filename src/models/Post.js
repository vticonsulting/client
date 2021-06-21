import Model from './Model'
import User from './User'

export default class Post extends Model {
  // Set the resource route of the model
  resource() {
    return 'posts'
  }

  relations() {
    return {
      user: User,
    }
  }

  // Define the primary key of the model
  primaryKey() {
    return 'slug'
  }
}
