export function Product({name, subtitle, label, price, features, description}) {
    return (
    <li>
        <h1>{name}</h1>
        <h2>{subtitle}</h2>
        <p>{label}</p>
        <p>{price}</p>
        <p>{features}</p>
        <p>{description}</p>
    </li>
    );
}