function Search(data, title){
	if(data.title === title) return data;
	let stack = data.children ? [data] : [];
	while(stack.length > 1) {
		let currentNode = stack.shift();
		for(let i = 0; i < currentNode.children.length; i++){
			if(currentNode.children[i].title === title){
				return currentNode.children[i];
			}
			currentNode.children[i].children && stack.push(currentNode.children[i]);
		}
	}
	return 'Not Found';
}

Search(Data[0], 'Name');

var Data = [
        {
            "title":"Authors",
            "elementType":"Sequence",
            "children":[
                {
                    "title":"Author",
                    "children":[
                        {
                            "title":"ID",
                            "type":"string",
                            "leafElement":true
                        },
                        {
                            "title":"Name",
                            "children":[
                            {
                                "title":"FirstName",
                                "type":"string",
                                "leafElement":true
                            },
                            {
                                "title":"MiddleName",
                                "type":"string",
                                "leafElement":true
                            },
                            {
                                "title":"LastName",
                                "type":"string",
                                "leafElement":true
                            }
                            ],
                            "elementType":"Sequence"
                        },
                        {
                            "title":"Address",
                            "children":[
                            {
                                "title":"Street",
                                "type":"string",
                                "leafElement":true
                            },
                            {
                                "title":"City",
                                "type":"string",
                                "leafElement":true
                            },
                            {
                                "title":"State",
                                "type":"string",
                                "leafElement":true
                            },
                            {
                                "title":"Zip",
                                "type":"string",
                                "leafElement":true
                            }
                            ],
                            "elementType":"Sequence"
                        },
                        {
                            "title":"Gender",
                            "type":"string",
                            "leafElement":true
                        },
                        {
                            "title":"Books",
                            "children":[
                            {
                                "title":"Book",
                                "children":[
                                    {
                                        "title":"Name",
                                        "type":"string",
                                        "leafElement":true
                                    },
                                    {
                                        "title":"Subject",
                                        "type":"string",
                                        "leafElement":true
                                    },
                                    {
                                        "title":"ISBN",
                                        "type":"string",
                                        "leafElement":true
                                    }
                                ],
                                "elementType":"Sequence"
                            }
                            ],
                            "elementType":"Sequence"
                        }
                    ],
                    "elementType":"Sequence"
                }
            ]
        }];

//Perform the search on above data.
