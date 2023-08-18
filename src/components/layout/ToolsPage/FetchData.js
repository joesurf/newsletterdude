import { supabase } from '../../../api';


export const fetchdata = async ()=>{
    try {
        let { data, error, status } = await supabase
            .from("Tool")
            .select(`*`)

        if (error && status !== 406) {
            throw error;
        }

        if (data) {
            return data;
        }
    } catch (error) {
        alert(error.message);
    } finally {
        // console.log(user);
    }
};


export const fetchcategory = async () => {
    try {
        let { data, error, status } = await supabase
            .from("distinct_tool_categories")
            .select(`category`)

        if (error && status !== 406) {
            throw error;
        }

        if (data) {
            return data;
        }
    } catch (error) {
        alert(error.message);
    } finally {
        // console.log(user);
    }  
}


export const fetchtype = async () => {
    try {
        let { data, error, status } = await supabase
            .from("distinct_tool_types")
            .select(`type`)

        if (error && status !== 406) {
            throw error;
        }

        if (data) {
            return data;
        }
    } catch (error) {
        alert(error.message);
    } finally {
        // console.log(user);
    }  
}