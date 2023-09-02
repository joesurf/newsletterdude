import { supabase } from '../../../api';


const convertSupabaseDataToGraphData = (data) => {
  let graphdata = {
    "Aggregator": {
      id: "Aggregator",
      data: []
    },
    "Platform": {
      id: "Platform",
      data: []
    },
    "Niche": {
      id: "Niche",
      data: []
    },
  }
  
  for (var i = 0; i <  data.length; i++) {
    let newsletterInfo = data[i]
    if(newsletterInfo.subscribers === 0 || newsletterInfo.revenue === 0) continue
    newsletterInfo["x"] = newsletterInfo.subscribers
    newsletterInfo["y"] = newsletterInfo.revenue
    
    graphdata[newsletterInfo.category]["data"].push(newsletterInfo) 
  }
  return Object.values(graphdata)
}

export const fetchnewsletterdata = async () => {
  try {
      let { data, error, status } = await supabase
          .from("Newsletter")
          .select(`*`)

      if (error && status !== 406) {
          throw error;
      }

      if (data) {
         return convertSupabaseDataToGraphData(data);
      } else {
        return []
      }
  } catch (error) {
      console.log(error.message);
  } finally {
      // console.log(user);
  }
};
