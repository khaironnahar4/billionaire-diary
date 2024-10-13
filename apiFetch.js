const apiFetch = async (apiData)=> {
    const res = await fetch(apiData);
    const data = await res.json(); 
    return data
    
}