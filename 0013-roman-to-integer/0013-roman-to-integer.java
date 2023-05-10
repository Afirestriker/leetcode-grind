class Solution {
    public int romanToInt(String s) {
     
        int sum = 0;
    
        for(int i=0; i<s.length();)
        {
            int j=i;
            int subStatus = 0;

            if((j+1) != s.length())
            {
                String sub = s.substring(j, (j+2));

                switch(sub)
                {
                    case "CM":
                    case "CD":
                    case "XC":
                    case "XL":
                    case "IX":
                    case "IV":
                        subStatus = 1;
                        if(sub.contains("CM"))
                            sum += 900;
                        else if(sub.contains("CD"))
                            sum += 400;
                        else if(sub.contains("XC"))
                            sum += 90;
                        else if(sub.contains("XL"))
                            sum += 40;
                        else if(sub.contains("IX"))
                            sum += 9;
                        else if(sub.contains("IV"))
                            sum += 4;
                        break;

                    default:
                        break;
                }
            }
            
            if(subStatus == 1)
                i = j+2;
            else
            {
                if(s.charAt(i) == 'M')
                    sum += 1000;
                else if(s.charAt(i) == 'D')
                    sum += 500;
                else if(s.charAt(i) == 'C')
                    sum += 100;
                else if(s.charAt(i) == 'L')
                    sum += 50;
                else if(s.charAt(i) == 'X')
                    sum += 10;
                else if(s.charAt(i) == 'V')
                    sum += 5;
                else if(s.charAt(i) == 'I')
                    sum += 1;
                
                i++;
            }   
        }
        return sum;   
    }
}
