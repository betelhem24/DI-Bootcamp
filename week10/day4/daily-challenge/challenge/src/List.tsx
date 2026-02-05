import React from 'react';

// Generic List Props
interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

// Generic List Component
function List<T>({ items, renderItem }: ListProps<T>) {
    return (
        <ul className="generic-list">
            {items.map((item, index) => (
                <li key={index} className="list-item">
                    {renderItem(item)}
                </li>
            ))}
        </ul>
    );
}

export default List;
