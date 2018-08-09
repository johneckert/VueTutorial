new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameRunning: false,
        attackRecord: []
    },
    methods: {
        toggleGame: function() {
            this.gameRunning = !this.gameRunning
            this.playerHealth = 100
            this.monsterHealth = 100
        },
        attack: function() {
            let damageM = this.calculateDamage(3,10)
            this.monsterHealth -= damageM
            this.attackRecord.push({actor: 'Player', action: 'attacks', damage: damageM, isPlayer: true})
            if (this.checkWin()) {
                return
            }

            this.monsterAttack()
        },
        specialAttack: function () {
            let damageM = this.calculateDamage(10, 20)
            this.monsterHealth -= damageM
            this.attackRecord.push({ actor: 'Player', action: 'attacks hard', damage: damageM, isPlayer: true })
            if (this.checkWin()) {
                return
            }

           this.monsterAttack()
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10
                this.attackRecord.push({ actor: 'Player', action: 'heals', damage: '10', isPlayer: true })
            } else {
                let healAmount = 100 - this.playerHealth
                this.playerHealth = 100
                this.attackRecord.push({ actor: 'Player', action: 'heals', damage: healAmount, isPlayer: true })
            }
        },
        giveUp: function() {
            this.gameRunning = false
        },
        monsterAttack() {
            let damageP = this.calculateDamage(5, 12)
            this.playerHealth -= damageP
            this.attackRecord.push({ actor: 'Monster', action: 'attacks', damage: damageP, isPlayer: false })
            this.checkWin()
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin() {
            if (this.playerHealth <= 0) {
                if (confirm("You Lose! New Game?")) {
                    this.toggleGame()
                }
                else {
                    this.gameRunning = false
                }
                return true
            }
            else if (this.monsterHealth <= 0) {
                if (confirm("You Win! New Game?")) {
                    this.toggleGame()
                }
                else {
                    this.gameRunning = false
                }
                return true
            }
            return false
        }
    }
})