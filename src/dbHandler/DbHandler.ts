function randomText() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = '';
    const length = Math.floor(Math.random() * 20)
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

class DbHandler {

    getItems() {
        const results = []
        const ranNum = Math.floor(Math.random() * 20)
        for (let i = 0; i < ranNum; i++) {
            results.push({
                id: i+1,
                name: randomText()
            })
        }
        return results
    }

}

export default DbHandler;