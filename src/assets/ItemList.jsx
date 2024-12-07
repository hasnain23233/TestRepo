import React, { useEffect, useState } from 'react';

function ItemList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>

            {items.length === 0 ? (
                <p>No items available</p>
            ) : (
                <ul className='FetchDataContainer'>

                    <h1>Fetched the data</h1>
                    {items.map((item) => (

                        <>
                            <li key={item.id} className='list'>{item.title}</li>
                        </>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ItemList;
