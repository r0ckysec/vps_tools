#coding:utf-8
#code by yangguang

import socket,requests
import threading,Queue
import sys,ipaddr
import time
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
import urllib3
urllib3.disable_warnings()

# Port = (80,81,82,83,84,85,86,97,88,89,90,91,443,5000,5001,7001,8000,8001,8008,8009,8080,8081,8088,8089,8443,8888,9000,9001,9090,10001,10010)   #此处放置默认扫描的Web端口
Port = list(range(80,95))+list(range(8080,8101))+[443, 4848, 5000, 5001, 7001, 7002, 7778
                    ,\
                    8000,  8001,  8002,  8003
                    ,\
                    8004,  8005,  8006,  8007,  8008,  8009,  8010,  8020,  8030,  8040,\
                    8043,  8050,  8060,  8066,  8069,  8070,  8096,  8099,  8100
                    ,\
                    8200,  8443,  8480,  8488,  8588,  8688,  8788,  8800,  8888,  8900,\
                    9000,  9001,  9002,  9003,  9004,  9005,  9006,  9007,  9008,  9909,\
                    9010,  9020,  9030,  9040,  9043,  9050,  9060,  9070,  9080,  9081,\
                    9082,  9083,  9084,  9085,  9086,  9087,  9088,  9089,  9090,  9100,\
                    9200,  9300,  9400,  9500,  9600,  9700,  9800,  9900,  9999,  8032,\
                    8023,  2375,  5904,  6066,  7077,  10001, 10010]

class PortScan(threading.Thread):
    def __init__(self,queue):
        threading.Thread.__init__(self)
        self._queue = queue
    def run(self):

        while True:
            if self._queue.empty():
                break
            try:
                ip = str(self._queue.get(timeout=0.5))

                for port in Port:
                    addr = (ip, port)
                    s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
                    try:
                        s.settimeout(0.5)
                        s.connect(addr)
                        try:
                            if int(port) == 443:
                                url = 'https://' + str(ip)
                            elif int(port) == 8443:
                                url = 'https://' + str(ip) + ':' + str(port)
                            else:
                                url = 'http://' + str(ip) + ':' + str(port)

                            title = self.get_http_banner(url)
                            sys.stdout.write("%-27s %-30s\n" % (url,title))

                        except Exception:
                            pass
                    except:
                        s.close()
                        continue
            except Exception:
                pass

    def get_http_banner(self, url):
        try:
            r = requests.get(url, headers={'UserAgent': UserAgent().random},
                             timeout=10, verify=False, allow_redirects=True)
            encode = requests.utils.get_encodings_from_content(r.content)
            r.encoding = encode[0]
            soup = BeautifulSoup(r.text, 'lxml')
            return soup.title.text.strip('\n').strip()
        except Exception as e:
            print e
            pass

def main():
    if len(sys.argv) != 2:
        print 'Usage: python webscan.py 192.168.1.1/24'
    else:
        time_start = time.time()
        threads = []
        thread_count = 100        #线程数
        queue = Queue.Queue()
        cidrip = sys.argv[1]      #接收输入IP段
        try:
            ips = ipaddr.IPNetwork(cidrip)

            for ip in ips:
                queue.put(ip)
        except:
            with open(cidrip,'r+') as rf:
                for line in rf:
                    line = line.replace('\n','').replace('\r','').strip()
                    queue.put(line)

        for i in xrange(thread_count):
            threads.append(PortScan(queue))

        for t in threads:
            t.start()

        for t in threads:
            t.join()
        print 'ALL Finished, Running Time:' + str(time.time() - time_start)

if __name__ == '__main__':
    main()