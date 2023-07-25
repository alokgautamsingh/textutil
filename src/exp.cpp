//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++

class Solution{
public:
    string decodedString(string s){
        // code here
        stack<char>st;
          string temp ="";
        for(int i =0;i<s.length();i++)
        {
           if(s[i]==']')
           {
              temp =   "";
               while(!st.empty()&& st.top()!='[')
               {   char ch = st.top();
                     cout<<ch<<"    ";
                   temp += ch;
                   cout<<temp<<"   ";
                   st.pop();
               }
               reverse(temp.begin(),temp.end());
               cout<<endl<<temp<<"   ";
               st.pop();
               int n = st.top();
               cout<<endl<<temp<<"   ";
               st.pop();
               string s1 = temp;
  
               for (int k=1; k<n;k++)
                    temp += s1; // Concatenating strings
                // cout<<endl<<temp<<"   ";
                //  cout<<endl<<temp<<"   ";
            //   reverse(temp.begin(),temp.end());

               cout<<endl<<temp<<"  ";
               for(int j =0;j<temp.length();j++)
               {
                   st.push(temp[j]);
               }
           }
           else
           {
            //  cout<<s[i]<<" ";
              st.push(s[i]);
           }
          
           
           
        }
        return temp;
    }
};

//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        string s;
        cin>>s;
        
        Solution ob;
        cout<<ob.decodedString(s)<<"\n";
    }
    return 0;
}
// } Driver Code Ends