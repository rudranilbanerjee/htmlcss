import java.util.*;
public class FindPathinMatrix{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int m=sc.nextInt();
        int[][] arr=new int[n][m];
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<m;j++)
            {
                arr[i][j]=sc.nextInt();
            }
        }
        int[][] dp=new int[n][m];
        System.out.println(solve(arr,0,0,n,m,dp));
   }
   public static int solve(int[][] arr, int i,int j,int n,int m,int[][] dp)
   {
       if(i==n || j==m || arr[i][j]==0)
       return 0;
       if(i==n-1 && j==m-1)
       return 1;
       if(dp[i][j]!=0)
       return dp[i][j];
       // for forward
       int left=solve(arr,i,j+1,n,m,dp);
       // for downward
       int right=solve(arr,i+1,j,n,m,dp);
       dp[i][j]=left+right;
       return dp[i][j];
   }
}