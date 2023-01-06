import { BaseRepository } from './base-repository'

const repositories = {
    posts: {
        endpoint: 'posts'
    },
    comments: {
        endpoint: 'comments'
    },
    albums: {
        endpoint: 'albums'
    },
    photos: {
        endpoint: 'photos'
    },
    todos: {
        endpoint: 'todos'
    },
    users: {
        endpoint: 'users'
    },
}

// memory of instances so u wouldnt have to create 
// a new repo everytime its called, rather call from instances
const instances = {}

function createFactory (typeName) {
    if (instances[typeName] == null || instances[typeName] == undefined) {
        if (!(typeName in repositories)) {
            console.log('Endpoint doesnt exist')
            return null
        }
        const endpoint = repositories[typeName].endpoint
        const repo = new BaseRepository(endpoint)

        instances[typeName] = repo

        return instances[typeName]
    }
}

export default {
    get: name => createFactory(name)
}

