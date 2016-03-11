#include <iostream>
#include <string>
using namespace std;


int main(){
	string line;
	while(getline(cin,line))
		if(!line.empty()){
			cout << "			{" << endl;
			//Q
			line.erase(0,4);
			cout << "				\"Q\":\""<< line << "\"," << endl;
			//A
			getline(cin,line);
			line.erase(0,3);
			cout << "				\"A\":\""<< line << "\"," << endl;
			//B
			getline(cin,line);
			line.erase(0,3);
			cout << "				\"B\":\""<< line << "\"," << endl;
			//C
			getline(cin,line);
			line.erase(0,3);
			cout << "				\"C\":\""<< line << "\"," << endl;
			//D
			getline(cin,line);
			line.erase(0,3);
			cout << "				\"D\":\""<< line << "\"," << endl;
			//E
			getline(cin,line);
			line.erase(0,3);
			cout << "				\"E\":\""<< line << "\"," << endl;
			//Ans
			getline(cin,line);
			line.erase(0,8);
			cout << "				\"Ans\":\""<< line << "\"" << endl;
			cout << "			}," << endl;
		}
}