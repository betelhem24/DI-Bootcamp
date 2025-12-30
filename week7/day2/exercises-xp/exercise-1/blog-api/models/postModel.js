const db = require('../config/db');

class PostModel {
    static getAllPosts() {
        return db('posts').select('*').orderBy('created_at', 'desc');
    }

    static getPostById(id) {
        return db('posts').where({ id }).first();
    }

    static async createPost(title, content) {
        const [post] = await db('posts')
            .insert({ title, content })
            .returning('*');
        return post;
    }

    static async updatePost(id, title, content) {
        const [post] = await db('posts')
            .where({ id })
            .update({ title, content })
            .returning('*');
        return post;
    }

    static async deletePost(id) {
        const [post] = await db('posts')
            .where({ id })
            .del()
            .returning('*');
        return post;
    }
}

module.exports = PostModel;
