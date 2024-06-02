const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    following: '',
    followers: '',
    createEvents: [],
    pushEvents: [],

    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.following = gitHubUser.following
        this.followers = gitHubUser.followers
    },
    setRepositories(repositories){
        this.repositories = repositories      
    },
    setEvents(events){
        this.createEvents = events.filter(event => event.type === "CreateEvent");
        this.pushEvents = events.filter(event => event.type === "PushEvent");
    }  
}

export { user }