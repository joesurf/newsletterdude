import { supabase } from '../../../api';

const convertSupabaseDataToListData = (data) => {
    for (var i = 0; i <  data.length; i++) {
        let newsletterInfo = data[i]
        newsletterInfo["data"] = [
            {
                header: "Steps Involved",
                value: "80%"
            },
            {
                header: "Category",
                value: newsletterInfo.category
            },
            {
                header: "Revenue",
                value: newsletterInfo.revenue < 1 ? `$${newsletterInfo.revenue*1000}k` : `$${newsletterInfo.revenue}m`
            }
        ]
        
        data[i] = newsletterInfo
      }
      return data
}

export const fetchnewsletterdata = async ()=>{
    try {
        let { data, error, status } = await supabase
            .from("Newsletter")
            .select(`*`)
  
        if (error && status !== 406) {
            throw error;
        }
  
        if (data) {
            return convertSupabaseDataToListData(data);
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        // console.log(user);
    }
  };


export const fetchnewslettercategory = async () => {
    try {
        let { data, error, status } = await supabase
            .from("distinct_newsletter_category")
            .select('category')

        if (error && status !== 406) {
            throw error;
        }

        if (data) {
            return data.map(item => item.category);
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        // console.log(user);
    }  
}
