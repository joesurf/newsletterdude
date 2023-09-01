import { supabase } from '../../../api';


export const fetchdata = async ()=>{
    try {
        let { data, error, status } = await supabase
            .from("Tool")
            .select(`*, type`)
            .eq('type', 'tools')

        if (error && status !== 406) {
            throw error;
        }

        if (data) {
            return data;
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        // console.log(user);
        return []
    }
};


export const fetchcategory = async () => {
    try {
        let { data, error, status } = await supabase
            .from("Tool")
            .select(`newsletter_category`)

        let category_array = []
        for (var i = 0; i < data.length; i++) {
            category_array = category_array.concat(data[i].newsletter_category)
        }
        let unique_values = [
            ...new Set(category_array),
        ];

        if (error && status !== 406) {
            throw error;
        }

        if (data) {
            return unique_values;
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        // console.log(user);
        return []
    }  
}
