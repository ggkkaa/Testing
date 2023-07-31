export class InputHandler {
    constructor(game){
        this.keys = [];
        this.game = game;
        window.addEventListener('keydown', e => {
            if ((e.key === 's' || e.key === 'w' || e.key === 'a' || e.key === 'd' || e.key === 'Enter' || e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') && this.keys.indexOf(e.key) === -1){ 
                this.keys.push(e.key)
            } else if (e.key === "Control") this.game.debug = !this.game.debug;
            
        });
        window.addEventListener('keyup', e => {
            if (e.key === 's' || e.key === 'w' || e.key === 'a' || e.key === 'd' || e.key === 'Enter' || e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
                this.keys.splice(this.keys.indexOf(e.key), 1)
            }
        })
    }
}