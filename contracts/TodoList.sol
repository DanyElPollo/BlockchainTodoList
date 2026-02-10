// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract TodoList {

    // Eventos para emitir cuando se crea un nuevo todo o se marca como completado.
    event TodoCreated(uint256 id, string text);
    event TodoCompleted(uint256 id, bool completed);

    // Observar como si fuera una clase con sus atributos.
    struct Todo {
        uint256 id;
        string text;
        bool completed;
    }

    // Mapping para almacenar los TODOs creados, con su id como clave.
    mapping(address => uint256) public nextId;
    mapping(address => mapping(uint256 => Todo)) public userTodos;

    // Funciones para crear un nuevo TODO, marcarlo como completado, obtener un TODO por su id y obtener todos los TODOs.
    function createTodo(string memory _text) public {
        nextId[msg.sender]++;
        uint256 id = nextId[msg.sender];

        userTodos[msg.sender][id] = Todo({id: id, text: _text, completed: false});

        emit TodoCreated(id, _text);
    }

    function toggleCompleted(uint256 _id) public {
        require(_id > 0 && _id <= nextId[msg.sender], "Todo not found");
        Todo storage todo = userTodos[msg.sender][_id];
        todo.completed = !todo.completed;

        emit TodoCompleted(_id, todo.completed);
    }

    function getTodo(uint256 _id) public view returns (Todo memory) {
        require(_id > 0 && _id <= nextId[msg.sender], "Todo not found");
        return userTodos[msg.sender][_id];
    }

    function getAllTodos() public view returns (Todo[] memory) {
        uint256 count = nextId[msg.sender];
        Todo[] memory result = new Todo[](count);

        for (uint256 i = 0; i < count; i++) {
            result[i] = userTodos[msg.sender][i + 1];
        }

        return result;
    }
}
