(function () {

    var i, numbers = '', rnd;

    var binTree = {
        add: function (value) {
            if (!binTree.head) {
                binTree.head = new Node(value);
                console.log('head: ' + value);
                console.log('-----');
                return;
            }

            var current = binTree.head;
            while (true) {
                console.log('current: ' + current.value);
                if (value < current.value) {
                    if (current.leftNode) {
                        current = current.leftNode;
                    }
                    else {
                        current.leftNode = new Node(value);
                        console.log('left: ' + value);
                        console.log('-----');
                        break;
                    }
                }
                else {
                    if (current.rightNode) {
                        current = current.rightNode;
                    }
                    else {
                        current.rightNode = new Node(value);
                        console.log('right: ' + value);
                        console.log('-----');
                        break;
                    }
                }
            }
        },
        search: function (value) {
            var current = binTree.head;
            while (current) {
                if (value == current.value) {
                    return true;
                }
                if (value < current.value) {
                    current = current.leftNode;
                }
                if (value > current.value) {
                    current = current.rightNode;
                }
            }
            return false;
        }
    };

    //Filling the binary tree with random numbers.
    for (var i = 0; i < 1000; i++) {
        rnd = Math.floor((Math.random() * 1000) + 1);
        binTree.add(rnd);
        numbers += rnd + ' ';
    }
    document.getElementById('numbers').innerHTML = numbers;

    //Searching the binary tree for the lucky number '777'
    if (binTree.search(777)) {
        document.getElementById('result').innerHTML = "Lucky number 777 has been found.";
    }
    
    function Node(value) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
    }

})();