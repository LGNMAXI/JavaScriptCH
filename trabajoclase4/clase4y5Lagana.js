
class fiambres {
        constructor (tipo, precio) {
                this.tipo = tipo;
                this.precio = precio;
        }
}

        const fiambres1 = new fiambres ("Jamón Cocido", 320);
        const fiambres2 = new fiambres ("Jamón Crudo", 350);
        const fiambres3 = new fiambres ("Queso provolone", 500);
        const fiambres4 = new fiambres ("Queso Reggianito", 320);
        const fiambres5 = new fiambres ("Salame", 250);

        
        
        console.log (fiambres1);
        console.log (fiambres2);
        console.log (fiambres3);
        console.log (fiambres4);
        console.log (fiambres5);

        
        const fiambre = ["Jamón Cocido", "Jamón Crudo", "Queso provolone", "Queso Reggianito", "Salame"];
        const quesos = fiambre.filter (producto => producto.includes ("Queso"));
        const jamones = fiambre.filter (producto => producto.includes ("Jamón"));
        
        
        console.log (quesos)
        console.log (jamones)
