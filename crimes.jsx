class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ date: '123' }]
        };
    }
    componentDidMount() {
        this.downloadCrimeData();
    }
    async downloadCrimeData() {
        const response = await fetch(new URL("78gh-n26t.json?$where=community_name='EAU CLAIRE' and year='2022'&$order=date DESC", 'https://data.calgary.ca/resource/'));
        const crimes = await response.json();
        this.setState(function (state, props) {
            return { data: crimes };
        });
    }
    render() {
        return <table>
            <thead><tr>
                <td>Month</td>
                <td>Category</td>
                <td>How many reports</td>
            </tr></thead>
            <tbody style={{ "textTransform": "capitalize" }}>{
            this.state.data
                .map(c => {
                    if (!(c.year && c.month)) return;
                    return <tr key={c.id}>
                        <td >{c.year}-{c.month.toLowerCase()}</td>
                        <td>{c.category.toLowerCase()}</td>
                        <td>{c.crime_count}</td>
                    </tr>
                })
        }</tbody>
        </table>;
    }
}
const root = ReactDOM.createRoot(document.getElementById('crimes'));
root.render(React.createElement(Hello, null));
