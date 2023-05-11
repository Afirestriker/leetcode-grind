class Solution {
    public String longestCommonPrefix(String[] strs) {
        
        if(strs.length == 0)
            return "";
        
        String LongestCommonPrefix = "";
        
        for(int i=0; i<strs[0].length(); i++)
        {
            char character = strs[0].charAt(i);
            
            for(int j=1; j<strs.length; j++)
            {
                if(i == strs[j].length() || strs[j].charAt(i) != character)
                    return LongestCommonPrefix;
            }
            LongestCommonPrefix += character;
        }
        return LongestCommonPrefix;
    }
}