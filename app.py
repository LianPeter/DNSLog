import logging
import dns.resolver
from flask import Flask, request

app = Flask(__name__)
logger = logging.getLogger('demo')
logger.setLevel(logging.DEBUG)

# 创建文件处理器，指定文件名和编码
handler = logging.FileHandler('dnslog.log', encoding='utf-8')
handler.setLevel(logging.DEBUG)

# 创建日志格式器，并将其添加到处理器中
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# 将处理器添加到日志记录器
logger.addHandler(handler)


@app.route('/log_dns', methods=['GET'])
def log_dns():
    domain_name = 'www.runoob.com'
    qtype = 'A'  # 获取IP v4
    resolver = dns.resolver.Resolver()
    answer = resolver.query(domain_name, qtype, raise_on_no_answer=False)  # 使用 query 方法
    if answer.rrset is not None:
        logger.info(f"IP地址：\n {answer.rrset}")
        print(answer.rrset)
    domain = request.args.get('domain')

    if domain:
        logger.info(f"收到的 DNS 查询: {domain}")
        return f"记录的 DNS 查询: {domain}"
    return "未提供域名", 400


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
