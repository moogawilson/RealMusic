FROM public.ecr.aws/lambda/python:3.12
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY src/ /var/task/src
COPY models/ /var/task/models/
CMD [ "src.app.lambda_handler" ]
