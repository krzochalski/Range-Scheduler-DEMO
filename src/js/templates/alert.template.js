export default function (message, type) {
    type = type || 'info';

    return `
        <div class="alert alert-${type}">${message}</div>
    `;
}
