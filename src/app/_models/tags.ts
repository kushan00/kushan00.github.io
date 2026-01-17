
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#355158')
    static readonly SQL = new Tag('SQL', '#355158');
    static readonly FLASK = new Tag('Flask', '#4a6a77');
    static readonly RESTAPI = new Tag('Rest API', '#355158');
    static readonly POSTMAN = new Tag('Postman', '#355158');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS3 = new Tag('CSS3', '#192129');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129');
    static readonly DOCKER = new Tag('Docker', '#355158');
    static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#355158');
    static readonly SQLITE = new Tag('SQLite', '#355158');
    static readonly GOLANG = new Tag('Golang', '#457189');
    static readonly REACT = new Tag('React JS', '#192129');
    static readonly NEXTJS = new Tag('Next JS', '#192129');
    static readonly VITEJS = new Tag('Vite JS', '#192129');
    static readonly NODEJS = new Tag('Node JS', '#457189');
    static readonly NESTJS = new Tag('Nest JS', '#457189');
    static readonly FLUTTER = new Tag('Flutter', '#5a7581');
    static readonly REACTNATIVE = new Tag('React Native', '#192129');
    static readonly GO = new Tag('GO', '#457189');
    static readonly MACHINELEARNING = new Tag('Machine Learning', '#4a6a77');
    static readonly SOCKETIO = new Tag('Socket IO', '#457189');
    static readonly REDIS = new Tag('Redis', '#355158');
    static readonly MONGODB = new Tag('Mongo DB', '#355158');
    static readonly FLASKAPI = new Tag('Flask API', '#4a6a77');
    static readonly PEBBLEDB = new Tag('Pebble DB', '#355158');
    static readonly AWS = new Tag('AWS', '#5a7581');
    static readonly CICD = new Tag('CI/CD', '#5a7581');
    static readonly FIREBASE = new Tag('Firebase', '#5a7581');
    static readonly ENCRYPTION = new Tag('Encryption', '#355158');
    static readonly SHAMIRSECRET = new Tag('Shamir Secret', '#355158');






    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}