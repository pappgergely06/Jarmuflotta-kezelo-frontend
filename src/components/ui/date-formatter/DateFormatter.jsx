function DateFormatter({ dateString }) {

    if (!dateString) return <span>-</span>;

    const date = new Date(dateString);

    if (isNaN(date.getTime())) return <span>Érvénytelen dátum</span>;

    const formattedDate = date.toLocaleDateString('hu-HU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    return <time dateTime={dateString}>{formattedDate}</time>;
} export default DateFormatter;