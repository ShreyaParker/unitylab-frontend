import { useState, useEffect } from 'react';
import axios from 'axios';

import ResultCards from "../components/ResultCards.jsx";
const Home = () => {
        const [query, setQuery] = useState('');
            const [results, setResults] = useState([]);

            useEffect(() => {
            const fetchResults = async () => {
            try {
            const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
                const filteredResults = response.data.hits.filter(
                    (result) =>
                        result.title.toLowerCase().includes(query.toLowerCase()) ||
                        (result.author && result.author.toLowerCase().includes(query.toLowerCase()))
                );
                setResults(filteredResults);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
        };


            if (query.trim() !== '') {
            fetchResults();
        } else {

            setResults([]);
        }
        }, [query]);

            return (
            <div>
                <div>
                    <input
                        className="bg-blue-100 p-3 m-2 rounded-2xl w-2/3"
                        type="text"
                        placeholder="Enter your search query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <span className="search-icon">&#128269;</span>
                </div>
                <div>
                    {results.length > 0 ? (
                        <div>
                            {results.map((result) => (
                                <ResultCards key={result.objectID} author={result.author} objectId={result.objectID} title={result.title}/>
                            ))}
                        </div>
                    ) : (
                        <p>No results found.</p>
                    )}
                </div>
        </div>
    );
};

export default Home;