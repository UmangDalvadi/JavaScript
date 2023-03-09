let obj = {
    names: ["umang", "vikash", "keval", "dhruv", "rajvi"],
    gretting: "good morning",
    fun() {
        this.names.forEach(name => {
            console.log(this.gretting + ", how are you " + name)
        });
    }
}
console.log(obj.fun())