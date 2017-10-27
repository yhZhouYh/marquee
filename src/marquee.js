export default class Marquee {
    constructor(options) {
        this.interval = options.interval || 2000
        this.duration = options.duration || 300
        this.direction = options.direction || 'up'
        this.itemHeight = 0
        this.currenTranslateY = 0
        this.height = options.height
        this.length = 0
        this.currentIndex = 0
        this.noAnimate = false
        this.timer = ''
        this.cloneNode = ''
        this.ele = options.ele
        this.destroy()
        this.init()
        this.start()
    }
    destroy() {
        this.timer && clearInterval(this.timer)
    }
    init() {
        this.destroy()
        if (this.cloneNode) {
            this.ele.removeChild(this.cloneNode)
        }
        this.cloneNode = null
        let firstItem = this.ele.firstElementChild
        if (!firstItem) {
            return false
        }
        this.length = this.ele.children.length
        this.height = this.itemHeight || firstItem.offsetHeight
        if (this.direction === 'up') {
            this.cloneNode = firstItem.cloneNode(true)
            this.ele.appendChild(this.cloneNode)
        } else {
            this.cloneNode = this.ele.lastElementChild.cloneNode(true)
            this.ele.insertBefore(this.cloneNode, firstItem)
        }
        return true
    }
    start() {

        if (this.direction === 'down') this.go(false)
        this.timer = setInterval(() => {

            if (this.direction === 'up') {
                this.currentIndex += 1
                this.currenTranslateY = -this.currentIndex * this.height
            } else {
                this.currentIndex -= 1
                this.currenTranslateY = -(this.currentIndex + 1) * this.height
            }
            this.ele.style.transform = 'translateY(' + this.currenTranslateY + 'px)'
            this.ele.style.transition = 'transform ' + this.duration + 'ms'

            if (this.currentIndex === this.length) {
                setTimeout(() => {
                    this.go(true)
                }, this.duration)
            } else if (this.currentIndex === -1) {
                setTimeout(() => {
                    this.go(false)
                }, this.duration)
            } else {
                this.noAnimate = false
            }
        }, this.interval + this.duration)
    }
    go(toFirst) {
        this.noAnimate = true
        if (toFirst) {
            this.currentIndex = 0
            this.currenTranslateY = 0

        } else {
            this.currentIndex = this.length - 1
            this.currenTranslateY = -(this.currentIndex + 1) * this.height
        }
        this.ele.style.transform = 'translateY(' + this.currenTranslateY + 'px)'
        this.ele.style.transition = ''
    }
}