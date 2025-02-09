import address from "./address.json";
//  "address": "http://localhost:3000"

const AddContact = async (accessToken, data) => {
    try {
        const response = await fetch(address.address + '/api/contacts', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            return {success: true, data: result};
        } else {
            const errorResult = await response.json();
            return {success: false, message: errorResult.message || 'Cannot Create Contact'};
        }
        // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return {success: false, message: 'Error Creating Contact.'};
    }
};

export default AddContact;